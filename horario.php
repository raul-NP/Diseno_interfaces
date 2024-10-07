<!-- PRÁCTICA 1 -->
<!--
1º Generar página web que en el título esté el nombre de la clase
2º Cual es el agente que ha lanzado el script
3º Que navegador es el actual
4º Horario de clase 
-->

<!-- Variables y Función-->
<?php 

    $clase = "3º MULWEB";
    $diseno = "Diseño de Interfaces Web (Emilio)";
    $desSer = "Desarrollo Web Servidor (Ana)";
    $desCli = "Desarrollo Web Cliente (Antonio)";
    $despliegue = "Despliegue de Aplicaciones Web (Yolanda)";
    $empresa = "Empresa e Iniciativa Empresarial (Raquel)";

    function getBrowser() {
        $infoNavegador = '';
        if (isset($_SERVER['HTTP_USER_AGENT'])){
            $infoNavegador = $_SERVER['HTTP_USER_AGENT'];
        }
        
        if (strpos($infoNavegador, 'Firefox') !== false) {
            return 'Mozilla Firefox';
        } elseif (strpos($infoNavegador, 'Opera') || strpos($infoNavegador, 'OPR/') !== false) {
            return 'Opera';
        } elseif (strpos($infoNavegador, 'Chrome') !== false) {
            return 'Google Chrome';
        } elseif (strpos($infoNavegador, 'Safari') !== false) {
            return 'Safari';
        } elseif (strpos($infoNavegador, 'MSIE') !== false || strpos($infoNavegador, 'Trident/') !== false) {
            return 'Internet Explorer';
        } else {
            return 'Desconocido';
        }
    }
?>

<!-- Página Web -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/apex.css">
    <title> 
        <?php echo $clase?>
    </title>
</head>

<body>
    <h1 style="text-align: center; margin-top: 4%;"><?php echo $clase?></h1>

    <marquee direction="up" scrollamount="15" onMouseOver="this.stop();" onMouseOut="this.start();"><div class="timeTable-container">
        <table class="timeTable1">
            <tr>
                <th style="border: none; background-color: rgb(229, 227, 227);"></th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
            </tr>
            <tr>
                <td class="white">16:00 - 16:50</td>
                <td rowspan="2" class="green"><?php echo $diseno ?></td>
                <td class="yellow"><?php echo $desSer ?></td>
                <td rowspan="2" class="orange"><?php echo $desCli ?></td>
                <td rowspan="2" class="green"><?php echo $diseno ?></td>
                <td rowspan="2" class="pink"><?php echo $despliegue ?></td>
            </tr>
            <tr>
                <td class="white">16:55 - 17:45</td>
                <td class="green"><?php echo $diseno ?></td>
            </tr>
            <tr>
                <td class="white">17:50 - 18:40</td>
                <td class="yellow"><?php echo $desSer ?></td>
                <td class="pink"><?php echo $despliegue ?></td>
                <td class="pink"><?php echo $despliegue ?></td>
                <td class="yellow"><?php echo $desSer ?></td>
                <td class="green"><?php echo $diseno ?></td>
            </tr>
        </table>

        <table class="timeTable2">
            <tr>
                <td class="white">19:05 - 19:55</td>
                <td class="yellow"><?php echo $desSer ?></td>
                <td rowspan="2" class="orange"><?php echo $desCli ?></td>
                <td class="pink"><?php echo $despliegue ?></td>
                <td class="yellow"><?php echo $desSer ?></td>
                <td class="green"><?php echo $diseno ?></td>
            </tr>
            <tr>
                <td class="white">20:00 - 20:50</td>
                <td rowspan="2" class="orange"><?php echo $desCli ?></td>
                <td rowspan="2" class="yellow"><?php echo $desSer ?></td>
                <td rowspan="2" class="wheat"><?php echo $empresa ?></td>
                <td rowspan="2" class="yellow"><?php echo $desSer ?></td>
            </tr>
            <tr>
                <td class="white">20:55 - 21:45</td>
                <td class="wheat"><?php echo $empresa ?></td>
            </tr>
        </table>
    </div></marquee>
</body>

<footer>
    <p style="text-align: center;"><strong>Navegador: </strong><?php echo getBrowser()?></p>
</footer>
</html>