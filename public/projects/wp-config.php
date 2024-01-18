<?php
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
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "db_a18087_wpflda" );

/** Database username */
define( 'DB_USER', "a18087_killki" );

/** Database password */
define( 'DB_PASSWORD', "Fundat10n" );

/** Database hostname */
define( 'DB_HOST', "MYSQL5048.site4now.net" );

//define('IS_VITE_DEVELOPMENT', TRUE);

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
 
 
 
define('AUTH_KEY',         'utB=nmctT_fULQ5B<5|}aafR+Ut=B5ax?AwnzGG<BapL#J1XQ;bKT-M^s)U:OEvV');
define('SECURE_AUTH_KEY',  '+z^HYmd%}j59|n>? -7k`&pWZ< un9P8c,C#BZ||1f0#TVg;sG*!RB.{I/LtDJv1');
define('LOGGED_IN_KEY',    '9;QH0MLcnf9JTF5m_%^|,G-B|+{hH-Vy,Wio-X#*O4O8IcF>gM8(ZxC?MrA|>et(');
define('NONCE_KEY',        '%-9X]Ogwh@>5{R;G$0m,tpBjR>^+L0KDnW-Z8xtWI~rD$N]>|}D&7CHt&2LxE:sX');
define('AUTH_SALT',        'HlKYNHpg{Ejh8g.= ?W5~5Yr]9Nr$YfG4j+0(FW|M+0+uyST[|u-Woc4Dx~&8+TA');
define('SECURE_AUTH_SALT', 'ye<{&.~3%J+}X@RvM|@e N`rueD/Qqqh^rF9B5w&B,U<42h,C Ya3W|lDKO-Z+x,');
define('LOGGED_IN_SALT',   ']BnVdV@XrCQF!2GoX($FHYSpve/ZOKL_M[$Ri:RYvt##}-L|q4z2CC>PXq5p=Y|A');
define('NONCE_SALT',       'w_W.6}Oc?-w>`-7os#>VwX;3YS&@t^G4Ur]aoFX7W|q@f<L6AL)|fXA.1^dHqsyw');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_fundation';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

$_SERVER['HTTPS'] = 'on';

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname(__FILE__) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
