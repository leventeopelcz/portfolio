<?php
	// get all images in a directory and return them in json
	
	if (isset($_GET['imgdir']) && $_GET['imgdir'] != 'undefined') {
		$directory = '../img/' . $_GET['imgdir'] . '/';
		
		if ($dirhandler = opendir($directory)) {
			$numfiles = 0;
			
			while ($file = readdir($dirhandler)) {
				if ($file != '.' && $file != '..') {
					$files[$numfiles] = $file;
					$numfiles++;
				}
			}
			
			closedir($dirhandler);
			
			// convert it to json and make json secure with angular thus the ")]}',\n" prefix
			sort($files);
			echo ")]}',\n" . json_encode($files);
		}
	}
?>