<script>
  document.addEventListener('DOMContentLoaded', function () {
    const btnEmail = document.getElementById('btnEmail');
    btnEmail.addEventListener('click', function () {
      const email = 'contato@seudominio.com';
      const subject = 'Contato via site';
      const body = 'Olá, gostaria de mais informações sobre...';

      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
</script>