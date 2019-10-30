var gulp       	 = require('gulp');
var sass       	 = require('gulp-sass');
var browserSync 	 = require('browser-sync').create();
var autoprefixer 	 = require('gulp-autoprefixer');
var plumber 		 = require('gulp-plumber');

gulp.task('browser-sync', function(done) { 
  browserSync.init({
    server: {
      baseDir: './build'
    },
    notify: false
  });
  
  browserSync.watch('build/').on('change', browserSync.reload);
  
  done()
});	

gulp.task('sass', function(done){
  gulp.src('app/sass/*.scss')
    .pipe(plumber({
      errorHandler : function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sass({errLogToConsole: true}))
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(autoprefixer({
        overrideBrowserslist:  ['last 2 versions'],
      cascade: false
    }))
   .pipe(gulp.dest('build/css'))
   .pipe(browserSync.reload({stream: true}));
  
  done()
});

gulp.task('watch', gulp.series('sass', 'browser-sync', function(done) {
  gulp.watch('app/**/*.*', gulp.series('sass'));
  
  done()
}));