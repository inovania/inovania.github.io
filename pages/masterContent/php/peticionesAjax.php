<?php 
	if (isset($_POST['q'])) {
	    $str = $_POST['q'];
	    echo "The string: '<i>".$str."</i>' contains ". strlen($str). ' characters and '. str_word_count($str, 0). ' words.<br>';
	}
 ?>