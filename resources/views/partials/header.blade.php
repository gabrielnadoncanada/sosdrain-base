<header class="header primary-bg" data-page="home2">
  <div class="header_navbar">
    <div class="container d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
      <a class="brand d-inline-flex align-items-center justify-content-center" href="<?= get_site_url() ?>">

        <img width="200px" src="<?= get_field('header_logo', 'option')['url']; ?>" alt="">
      </a>
        <?= wp_nav_menu([
            'menu' => get_field('header_nav', 'option'),
            'menu_id' => 'primary-navigation',
            'menu_class' => 'header_navbar-nav_list',
            'container_class' => 'header_navbar-nav',
            'container' => 'nav',
        ]) ?>
      <button class="hamburger">
        <span class="line line--short"></span>
        <span class="line"></span>
        <span class="line line--short"></span>
        <span class="line"></span>
      </button>
    </div>
  </div>

  @include('partials/page-header')
</header>
