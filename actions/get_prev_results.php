<?php
header('Content-Type: application/json');
require_once __DIR__ . '/../db_connection.php';

// Get NIC from POST JSON body or GET request
$nic = null;
$logNo = null;

// Check POST JSON body first
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputData = json_decode(file_get_contents('php://input'), true);
    $nic = isset($inputData['nic']) ? trim($inputData['nic']) : null;
    $logNo = isset($inputData['log_no']) ? intval($inputData['log_no']) : null;
}

// Fallback to GET parameters
if (empty($nic)) {
    $nic = isset($_GET['nic']) ? trim($_GET['nic']) : null;
    $logNo = isset($_GET['log_no']) ? intval($_GET['log_no']) : null;
}

// Validate NIC
if (empty($nic)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'NIC is required']);
    exit;
}

// Validate NIC format
if (!preg_match('/^[0-9]{9}[vVxX]$|^[0-9]{12}$/', $nic)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid NIC format']);
    exit;
}

try {
    // Query to fetch previous results
    // If log_no is specified, get that specific attempt; otherwise get the most recent
    if ($logNo) {
        $query = "SELECT * FROM ckey_results WHERE nic = ? AND log_no = ?";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$nic, $logNo]);
    } else {
        $query = "SELECT * FROM ckey_results WHERE nic = ? ORDER BY created_at DESC LIMIT 1";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$nic]);
    }
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($result) {
        echo json_encode([
            'status' => 'success', 
            'name' => $result[0]['name'],
            'nic' => $result[0]['nic'],
            'log_no' => $result[0]['log_no'],
            'score_r' => $result[0]['score_r'],
            'score_i' => $result[0]['score_i'],
            'score_a' => $result[0]['score_a'],
            'score_s' => $result[0]['score_s'],
            'score_e' => $result[0]['score_e'],
            'score_c' => $result[0]['score_c'],
            'created_at' => $result[0]['created_at'],
            'notes' => $result[0]['notes']
        ]);
    } else {
        http_response_code(404);
        echo json_encode(['status' => 'error', 'message' => 'No previous results found']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    error_log('Database error in get_prev_results.php: ' . $e->getMessage());
    echo json_encode(['status' => 'error', 'message' => 'Database error']);
}