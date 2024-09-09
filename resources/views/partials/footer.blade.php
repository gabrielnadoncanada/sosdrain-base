<footer class="footer primary-bg">
  <div class="container">
    <div class="footer_main d-flex flex-wrap justify-content-md-between col-12">
      <div class="footer_main-block col-sm-12 col-xl-auto">
        <a class="brand d-inline-flex align-items-center justify-content-center" href="<?= get_site_url() ?>">
          <img width="200px" src="<?= get_field('footer_logo', 'option')['url']; ?>" alt="">

        </a>
        <p class="footer_main-block_subtitle footer_main-block_subtitle--brand">
            <?= get_field('footer_text', 'option'); ?>
        </p>
      </div>
      <div class="footer_main-block col-12 col-sm-12 col-md-auto">
        <h4 class="footer_main-block_title"><?= __('Contact', 'sosdrain') ?></h4>
        <div class="group-wrapper d-flex justify-content-center justify-content-md-start">
          <i class="icon-call icon"></i>
          <div class="group d-flex flex-column">

            <a href="tel:<?= get_field('phone', 'option'); ?>"><?= get_field('phone', 'option'); ?></a>
          </div>
        </div>
        <div class="group-wrapper d-flex justify-content-center ">
          <i class="icon-inbox icon"></i>
          <div class="group d-flex flex-column">
            <a href="mailto:<?= get_field('mail', 'option'); ?>"><?= get_field('mail', 'option'); ?></a>
          </div>
        </div>
      </div>
      <div class="footer_main-block col-12 col-sm-12 col-md-auto">
        <h4 class="footer_main-block_title"><?= __('Compagnie', 'sosdrain') ?></h4>
          <?= wp_nav_menu([
              'menu' => get_field('menu_1', 'option'),
              'menu_class' => 'footer_main-block_nav',
              'container' => '',
          ]) ?>

      </div>
      <div class="col-12 mt-4">
        <img src="/wp-content/uploads/2022/03/apchq-white-logo-1.png" alt=""  width="225px">
      </div>


    </div>
    <div
      class="footer_secondary col-12 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
      <p class="footer_secondary-copyright">
        {!! get_field('copyright', 'option') !!}
      </p>
      @if(get_field('social', 'option'))

        <ul class="socials d-flex align-items-center justify-content-start socials--alt">
          @foreach(get_field('social', 'option') as $key => $item)
            <li class="socials_item">
              <a class="socials_item-link" href="{{ $item['url']}}" target="_blank" rel="noopener noreferrer">
                <i class="{{ $item['icon']}}"></i>
              </a>
            </li>
          @endforeach
        </ul>
      @endif
    </div>
  </div>
</footer>
<button id="scrollToTop" type="button">
  <i class="icon icon-arrow_right"></i>
</button>
