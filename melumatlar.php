<?php 

include ("baglan.php");

error_reporting(0);

function unicodeconvert($s) {

 $tr = array('İ','ü','Ü','ö','Ö','ç','Ç');
 
 $eng = array('&#304;','&#252;','&#220;','&#246;','&#214;','&#231;','&#199;');

 $s = str_replace($eng,$tr,$s);
 
 $s = trim($s, '');

 return $s;

}
/*$deyisimedilen = $db -> query("SELECT * FROM tarifler ORDER BY id ASC LIMIT 1000,1458")->fetchAll(PDO::FETCH_ASSOC);

foreach ($deyisimedilen as $deyisimedilen) {
	
	$deyisimedilenad = unicodeconvert(str_replace("</span>","",str_replace("<span>", "", $deyisimedilen['tarifAd'])));
	$i = $deyisimedilen['id'];

	$deyisme = $db -> query("UPDATE tarifler SET tarifAd='$deyisimedilenad' WHERE id = '$i'")->fetch(PDO::FETCH_ASSOC);

}*/

		/*$test = [1,10,11];
		$id = implode(',',$test);

		$yemeklerrandom = $db->query("SELECT * FROM tarifler ORDER BY RAND() WHERE id not in($id) LIMIT 20")->fetchAll(PDO::FETCH_ASSOC);
		
		foreach ($yemeklerrandom as $yemek) {
			echo $yemek['id']."<br>";
		}*/

if($_POST['header'])
{
	$bilgi = $_POST['info'];

	if ($bilgi==1)
	{
		$yemeklerrandom = $db->query("SELECT * FROM tarifler ORDER BY RAND() LIMIT 7")->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($yemeklerrandom);
	}
	else if($bilgi==2)
	{
		$yemekKateqoriya = $db->query("SELECT * FROM tarifkateqoriya ORDER BY id ASC")->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($yemekKateqoriya);
	}
	else if($bilgi==3)
	{
		$yemeklerrandom = $db->query("SELECT * FROM tarifler ORDER BY RAND() LIMIT 15")->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($yemeklerrandom);
	}
	else if($bilgi==4)
	{
		$id = $_POST['id'];
		$yemektarif = $db->query("SELECT * FROM tarifler WHERE id = '$id'")->fetch(PDO::FETCH_ASSOC);
		echo json_encode($yemektarif);
	}
	else if($bilgi==5)
	{
		$id = $_POST['id'];
		$katAd = $db->query("SELECT * FROM tarifkateqoriya WHERE id = '$id'")->fetch(PDO::FETCH_ASSOC);
		echo json_encode($katAd);
	}
	else if($bilgi==6)
	{
		$id = $_POST['id'];
		$yemektarifleri = $db->query("SELECT * FROM tarifler WHERE kateqoriyaId = '$id' LIMIT 0,15")->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($yemektarifleri);
	}
	else if($bilgi==7)
	{
		$id = $_POST['id'];
		$sira = $_POST['siralama'];
		$yemektarifleri = $db->query("SELECT * FROM tarifler WHERE kateqoriyaId = '$id' LIMIT $sira,6")->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($yemektarifleri);
	}
	else if($bilgi==8)
	{
		$id = $_POST['id'];
		$sira = $_POST['siralama'];
		$yemektarifleri = $db->query("SELECT * FROM tarifler WHERE kateqoriyaId = '$id' LIMIT $sira,15")->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($yemektarifleri);
	}
	else if($bilgi==9)
	{
		$mail = $_POST['mail'];
			if(filter_var($mail, FILTER_VALIDATE_EMAIL) )
			{ 

				$mailyoxla = $db->prepare("SELECT count(*) from abone where mail='{$mail}'");

				$mailyoxla->execute();

				$kyoxla = $mailyoxla->fetchColumn();

				if($kyoxla==0)
				{

					$mailelave = $db->prepare("INSERT INTO abone SET mail = ?");

					$insert = $mailelave->execute(array("$mail"));
					if ($insert)
					{
					    $last_id = $db->lastInsertId();
					}

					$netice = array('netice' => "1");

					echo json_encode($netice);

				}

				else
				{

					$netice = array('netice' => "2");

					echo json_encode($netice);

				}


			}
			else
			{
				$netice = array('netice' => "0");
				echo json_encode($netice);
			}
	}
	else if($bilgi==10)
	{
		//$axtarma = $_POST['axtaris'];
		$axtarma = $_POST['axtaris'];
		
		$axtar = $db->query("SELECT * FROM tarifler where tarifAd LIKE '%$axtarma%' ORDER BY id DESC")->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($axtar);
	}
	else if($bilgi==11)
	{
		//$axtarma = $_POST['axtaris'];
		$axtarma = $_POST['axtaris'];
		$sira = $_POST['sira'];
		
		$axtar = $db->query("SELECT * FROM tarifler where tarifAd LIKE '%$axtarma%' ORDER BY id DESC LIMIT $sira,15")->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($axtar);
	}
	else if($bilgi==12)
	{
		
		$id = implode(',',$_POST['id']);

		$yemeklerrandom = $db->query("SELECT * FROM tarifler WHERE id not in($id) ORDER BY RAND() LIMIT 6")->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($yemeklerrandom);
	}

}

?> 