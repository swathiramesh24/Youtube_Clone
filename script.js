function handleClick(element) {
  const channelUrl = element.getAttribute('data-channel-url');
  if (channelUrl) {
    window.location.href = channelUrl;
  }
}
