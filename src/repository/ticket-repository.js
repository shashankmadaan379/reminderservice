const { NotificationTicket } = require("../models/index");
class TicketRepository {
  async getAll() {
    try {
      const tickets = await NotificationTicket.findAll();
      return tickets;
    } catch (error) {
      console.log(error);
    }
  }

  async create(data) {
    try {
      const ticket = await NotificationTicket.create(data);
      return ticket;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = TicketRepository;
