<?php
// Connect
require_once 'database.php';

$state = $_POST["state"] ?? '';
$district = $_POST["district"] ?? '';
$address = $_POST["address"] ?? ''; 

    $stmt = $conn->prepare("
    INSERT INTO freetextBox (
        state,district,address
    ) VALUES (?, ?, ?)");

    $stmt->bind_param("sssssssss", $state, $district, $address);

    if ($stmt->execute()) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
?>