import { Alerts } from './alerts.model';
import { ChangePasswordForm } from './change-password-form.model';
import { Recaptcha } from "./recaptcha.model";

export class ViewOptions {
    alerts: Alerts;
    applicationTitle: string;
    changePasswordForm: ChangePasswordForm;
    changePasswordTitle: string;
    errorMessages: string[];
    recaptcha: Recaptcha;
    showPasswordMeter: boolean;
    defaultDomain: string;
}