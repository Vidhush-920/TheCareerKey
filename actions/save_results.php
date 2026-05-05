<?php
header('Content-Type: application/json');
require_once __DIR__ . '/../db_connection.php';

// Get the JSON data from the request body
$json = file_get_contents('php://input');
if (!$json) {
    echo json_encode(['status' => 'error', 'message' => 'No data received']);
    exit;
}

$data = json_decode($json, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON: ' . json_last_error_msg()]);
    exit;
}

if (!isset($data['nic']) || empty($data['nic'])) {
    echo json_encode(['status' => 'error', 'message' => 'Missing NIC in data']);
    exit;
}

$nic = $data['nic'];

try {

    // 1. Check for previous attempts for this NIC
    $checkSql = "SELECT COUNT(*) FROM ckey_results WHERE nic = ?";
    $checkStmt = $pdo->prepare($checkSql);
    $checkStmt->execute([$nic]);
    $previousAttempts = $checkStmt->fetchColumn();

    // 2. Set the current attempt number
    $currentAttempt = (int)$previousAttempts + 1;

    // 3. Set the Record ID
    // Assuming you don't have an auto-increment ID and need to manage it manually, you can get the max ID and increment it.
    $checkSql2 = "SELECT MAX(rec_id) FROM ckey_results";
    $checkStmt2 = $pdo->query($checkSql2);
    $maxId = $checkStmt2->fetchColumn();
    $recordId = $maxId !== false ? (int)$maxId + 1 : 1;

    // Insert into a 'results' table
    $sql = "INSERT INTO ckey_results 
            (rec_id, name, nic, log_no, score_r, score_i, score_a, score_s, score_e, score_c) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        $recordId,
        $data['name'], 
        $nic,
        $currentAttempt,
        $data['score_r'],
        $data['score_i'],
        $data['score_a'],
        $data['score_s'],
        $data['score_e'],
        $data['score_c']
    ]);

    echo json_encode(['status' => 'success', 'message' => 'User Results saved to database!']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>