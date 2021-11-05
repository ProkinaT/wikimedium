<script src="javascripts/jquery-3.6.0.js" charset="utf-8"></script>
<script type="text/javascript">
  $(function() {
    $('.sidebar a').each(function() {
      $(this).on('click', function(e) {
        e.preventDefault();
        var scrollTo = $(this).attr('href');
        var whitespace = scrollTo == '#s1' ? 70 : 30;
        $('html,body').animate({
          scrollTop: $(scrollTo).offset().top - whitespace
        }, 1000);
      });
    });
  });
</script>
