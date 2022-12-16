<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'kay_blog' );

/** Database username */
define( 'DB_USER', 'kay_user' );

/** Database password */
define( 'DB_PASSWORD', 'hpFrv9xPak24' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'voghxbrv75qcfsjmx68fqwo4m3vmb27zzlhaoxbw0pbgzw8ru5vjrrgm32o3fkll' );
define( 'SECURE_AUTH_KEY',  'zbvb4zzi7h8hhcrylcxotxtsaix0m6j243eb068oykrgw3xszi9dshwp7ird8ack' );
define( 'LOGGED_IN_KEY',    'jlqwirczwrgucfm5rwxt18cvje3nfkjxfzy1ehbtn4czfjssayu33vxn1bhnhzn7' );
define( 'NONCE_KEY',        'q1f2vpqtgfe9xzujqbackqw9zuzt2o9yunl17pxc5ut62y0wakwdlscklp3s4aer' );
define( 'AUTH_SALT',        'uhw29mwxqgpvokwmezvsrixfg12lj0shjznivim8iu0nrfj5xgu7qbqstmshugbl' );
define( 'SECURE_AUTH_SALT', '6onbktnsoxwlsvhks1pggtjrbcskaerqlxzvqhtix2movpks7qw8qeh1xu7x92eu' );
define( 'LOGGED_IN_SALT',   'kbemynqllkprorpftfrcawxzgdezhj849dhsxb7ujqpzwkf7aiukhg29qifywauy' );
define( 'NONCE_SALT',       'f6j59pzapxko0orrbs9dgr6vmdrl8bzkij2tuxwvaumic7hgljb0xq2bb15qfxze' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpdv_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
