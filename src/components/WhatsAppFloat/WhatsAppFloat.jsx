import './WhatsAppFloat.css'

function WhatsAppFloat() {
  const phone = "918885028100"
  const message = "Hello, I would like to discuss a real estate development project."

  const handleClick = () => {
    const url = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener")
  }

  return (
    <div className="whatsapp-float">
      <button
        type="button"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
        onClick={handleClick}
      >
        <span aria-hidden="true">✆</span>
      </button>
      <div className="whatsapp-hint">WhatsApp our team</div>
    </div>
  )
}

export default WhatsAppFloat
