<?php
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function mindset_blocks_mindset_blocks_block_init() {
	register_block_type( __DIR__ . '/build/copyright' );
	register_block_type( __DIR__ . '/build/company-address' );
	register_block_type( __DIR__ . '/build/company-email' );
	register_block_type( __DIR__ . '/build/service-posts', array(
		'render_callback' => 'fwd_render_service_posts',
	));
}
add_action( 'init', 'mindset_blocks_mindset_blocks_block_init' );

/**
* Registers the custom fields for some blocks.
*
* @see https://developer.wordpress.org/reference/functions/register_post_meta/
*/
function mindset_register_custom_fields() {
	register_post_meta(
		'page',
		'company_email',
		array(
			'type'         => 'string',
			'show_in_rest' => true,
			'single'       => true
		)
	);
	register_post_meta(
		'page',
		'company_address',
		array(
			'type'         => 'string',
			'show_in_rest' => true,
			'single'       => true
		)
	);
}
add_action( 'init', 'mindset_register_custom_fields' );

function fwd_render_service_posts( $attributes ) {
    ob_start();
    ?>
    <div <?php echo get_block_wrapper_attributes(); ?>>
        <?php
        
        $args = array( 
			'post_type'      => 'service',
			'posts_per_page' => 4
		);

		$query = new WP_Query( $args );
		 
		if ( $query -> have_posts() ) {
			while( $query -> have_posts() ) {
				$query -> the_post();
				
				echo '<article>';
					echo '<a href="' . get_permalink() . '">' . get_the_title() . '</a>'; // Title in a with permalink
					the_post_thumbnail(); // Featured Image
					the_content(); // Content from block editor
				echo '</article>';
		 
			}
			wp_reset_postdata(); 
		}
		 
		$query = new WP_Query( $args );
		 
		if ( $query -> have_posts() ) {
			while( $query -> have_posts() ) {
				$query -> the_post();
				
				echo '<article>';
					echo '<h2>' . get_the_title() . '</h2>'; // Title in h2
					the_post_thumbnail(); // Featured Image
					the_content(); // Content from block editor
				echo '</article>';
		 
			}
			wp_reset_postdata(); 
		}
        
        ?>
    </div>
    <?php
    return ob_get_clean();
}
