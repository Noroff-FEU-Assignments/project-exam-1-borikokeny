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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'flower-power' );

define( 'HEADLESS_MODE_CLIENT_URL', 'http://www.https://playful-sundae-55ad06.netlify.app' );

/** Database username */
define( 'DB_USER', 'root' );

define( 'HEADLESS_MODE_CLIENT_URL', 'http://www.borikokeny.one' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         'pYsC`QCS UPb*FJc741G9<@]D(_HBv^e2]31?dAwvK-7{zP28eR.wGpTqI]rxdbS' );
define( 'SECURE_AUTH_KEY',  'b!{ZfoTD1q@?-A*a7/T(G]7+N{V%`%GMo6OtE<$AbY8g~hzEPWcIyCKv/P?JftKx' );
define( 'LOGGED_IN_KEY',    '}Y=Y7;t~l;F}3DH=cfr$MwNL5fZ3+EjlyM|T]6<N_yw$<*;FV?*2G~01#G/~,NgE' );
define( 'NONCE_KEY',        '!$= NxWhYGucAA4~j9&qiktL+LK&QsuET$,v~mYX<4U|_0(sj86TN.g-j%9l?SU;' );
define( 'AUTH_SALT',        '?R>d=+OlUJqP~1RR~xLf{bs_{kC/b~<GU8pX!;kGHkTwj]M~%TgM6_L8j,y<et+0' );
define( 'SECURE_AUTH_SALT', ']/[0k[oNDsObI@(PC~VSVdaWl}$Bbc~-0<x=M(,)4M}JOPY#99)F|Lw545=v*!&z' );
define( 'LOGGED_IN_SALT',   '9UK ]ZK[G&^M/(0CPZj)s5=.TZ36a vi,[w@JvAHz[G;Kn>^Y->q@%{9SyMUp(s2' );
define( 'NONCE_SALT',       'p-lpkUjes/>%l+Jb7BP..Y~.0|R|_By/Va#gZ$2Y-Eym8%X)ivOz:d#yJ49KDwTU' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
