<?php include 'layouts/header.php'; ?>

<section>
    <div class="container">
        <div class="nav-row row">
            <div class="head-logo">
                <img src="assets/images/logo.png" alt="The Career Key Logo" />
            </div>
            <?php include './components/lang-switcher.php'; ?>
        </div>

        <?php 
            // In a simple setup, we include all pages for your SPA logic
            include 'pages/home.php'; 
            include 'pages/survey-self.php'; 
            include 'pages/survey-jobs.php'; 
            include 'pages/results.php'; 
            include 'pages/prev_results.php';
        ?>

    </div>
</section>

<!-- Modal Entry -->
<?php include './components/modal-entry.php'; ?>

<!-- Modal Exit -->
<?php include './components/modal-exit.php'; ?>

<?php include 'layouts/footer.php'; ?>