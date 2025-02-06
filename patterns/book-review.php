<?php

/**
 * Title: Book Review
 * Slug: mindset-theme/book-review
 * Category: media, text
 */
?>

<!-- wp:media-text {"mediaId":39,"mediaLink":"http://localhost:8888/mindset/index.php/2025/01/24/hello-world/yellow-flowers/","mediaType":"image","mediaWidth":40} -->
<div class="wp-block-media-text is-stacked-on-mobile" style="grid-template-columns:40% auto">
    <figure class="wp-block-media-text__media"><img src="<?php echo esc_url(get_theme_file_uri('assests/images/book-cover.jpg')) ?>" alt="" class="wp-image-39 size-full" /></figure>
    <div class="wp-block-media-text__content"><!-- wp:heading -->
        <h2 class="wp-block-heading"><?php esc_html_e('Title', 'midset-theme'); ?></h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph -->
        <p>Author</p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph -->
        <p>Description</p>
        <!-- /wp:paragraph -->
    </div>
</div>
<!-- /wp:media-text -->