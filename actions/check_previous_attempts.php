<?php
header('Content-Type: application/json');
require_once __DIR__ . '/../db_connection.php';

if (!isset($_GET['nic']) || empty($_GET['nic'])) {
    echo json_encode(['status' => 'error', 'message' => 'Missing NIC parameter']);
    exit;
}

$nic = $_GET['nic'];

try {
    // Check for previous attempts for this NIC
    $checkSql = "SELECT COUNT(*) FROM ckey_results WHERE nic = ?";
    $checkStmt = $pdo->prepare($checkSql);
    $checkStmt->execute([$nic]);
    $previousAttempts = $checkStmt->fetchColumn();

    echo json_encode([
        'status' => 'success',
        'nic' => $nic,
        'hasPreviousAttempts' => $previousAttempts > 0,
        'attemptCount' => (int)$previousAttempts
    ]);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}

?>
