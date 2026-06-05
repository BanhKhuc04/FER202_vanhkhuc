function BookingForm() {
  return (
    <section className="booking">
      <h2>Book Your Table</h2>

      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Your Name *</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Date *</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Select a Service *</label>
            <select>
              <option>Choose service...</option>
              <option>Dine In</option>
              <option>Take Away</option>
              <option>Delivery</option>
            </select>
          </div>
        </div>

        <label className="message-label">Please share your message</label>
        <textarea placeholder="Write your message..." />

        <button className="send-btn">Send Message</button>
      </form>
    </section>
  );
}

export default BookingForm;