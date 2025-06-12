<?php
// Connect
require_once 'database.php';

$state =trim($_POST["state"] ?? '');
$district = trim($_POST["district"] ?? '');
$address = trim($_POST["address"] ?? ''); 
 
echo('1'.$state.$district.$address);

    $stmt = $conn->prepare("
    INSERT INTO freetextBox (
        state,district,address
    ) VALUES (?, ?, ?)");

    $stmt->bind_param("sss", $state, $district, $address);

    if ($stmt->execute()) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
?>