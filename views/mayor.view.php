<?php require('templates/header.view.php'); ?>
<?php require('templates/topbar.view.php') ?>

<div id="root"></div>

<?php require('templates/scripts.view.php') ?>

<script>
  // dentro de los parentesis se debe colocar la variable en php que tiene la info
  const wageAvergage = <?php echo '' ?>;
</script>
<script src="js/mayor.js" type="text/babel"></script>

<?php require('templates/footer.view.php'); ?>