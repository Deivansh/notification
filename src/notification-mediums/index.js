import nodemailer from "nodemailer";
import configuration_object from "../../config/default";
import makeEmailService from "./email";

const emailService = makeEmailService({ nodemailer, configuration_object });
export default emailService;
