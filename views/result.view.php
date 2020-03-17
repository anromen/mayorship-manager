<?php
require('templates/header.view.php');
require('templates/topbar.view.php')
?>

<div id="root"></div>

<?php require('templates/scripts.view.php') ?>

<script>
  const jsonPerson = <?php echo json_encode($PERSON);?>;
  const jsonFamily = <?php echo json_encode($FAMILY);?>;
  const jsonNeighborhood = <?php echo json_encode($NEIGHBORHOOD);?>;
  const jsonInstitution = <?php echo json_encode($INSTITUTION);?>;
</script>
<script src="js/result.js" type="text/babel"></script>

<?php require('templates/footer.view.php'); ?>