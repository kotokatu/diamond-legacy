window.onload = (event) => {
  initMoonAIChat({
    uuid: "97499949-fca6-4115-a887-8f8a1ee45fcb",
    start_message:
      "Здравствуйте, я онлайн консультант компании Moon AI, чем я могу вам помочь?",
    lang: "ru",
  });
};

window.chatWidgetReady = function () {
  // Формат: (отступ_снизу, отступ_сбоку, единица_измерения, принудительно)
  // Значения 100, 100 — это смещение в пикселях от правого нижнего угла
  window.knowhere.api.setWidgetPosition(300, 300, "px", false);
};

/*
<script src="https://dashboard.mooonai.com/cdn/moon-ai-chat-plugin/v1.0.0/moon-ai-site-chat.min.js"></script>
<script defer>
initMoonAIChat({
  uuid: "97499949-fca6-4115-a887-8f8a1ee45fcb",
  start_message:
    "Здравствуйте, я онлайн консультант компании Moon AI, чем я могу вам помочь?",
  lang: "ru",
});
</script>
*/
