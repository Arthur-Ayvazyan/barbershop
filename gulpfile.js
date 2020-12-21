const gulp      = require('gulp');
const concat    = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss  = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const gcmq = require('gulp-group-css-media-queries');


const smartgrid = require('smart-grid');

// const cssFiles = [
// 	'./src/css/main.css',
// 	'./src/css/media.css'
// ];
const jsFiles = [
	// './src/js/lib.js',
	'./src/js/main.js'
];


// tasks
function styles() {
	return gulp.src('./src/sass/styles.sass')
	.pipe(sass())
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gcmq())
	// .pipe(cleanCss({comatibility: '2'}))
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.stream());
}


function scripts() {
	return gulp.src(jsFiles)
	// .pipe(concat('script.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
}



// function clean() {
// 	return del(['./build/*']);
// }

function watch() {
	 browserSync.init({
        server: { 
     	   	baseDir: "./build/"
     	}
    });
	// watch css
	gulp.watch('./src/sass/**/*.sass', styles);

	// watch js
	gulp.watch('./src/js/**/*.js', scripts);

	// watch HTML
	gulp.watch('./*.html').on('change', browserSync.reload);

}

var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
 gulp.task('smartgrid', () => smartgrid('./src/', settings));

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(gulp.parallel( styles, scripts)));
gulp.task('dev', gulp.series('build', 'watch'));

