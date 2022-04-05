import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface LoginEvent {
    username: string;
    password: string;
}

/**
 * Use for objects
 * @param value The object to check wether it's null
 * @returns True if "value" is null
 */
export const isNull = (value: any): boolean => value == undefined || value == null;

/**
 * Use for strings
 * @param value The string to check wether it's null or consists of only white spaces
 * @returns True if "value" is null or an empty string
 */
export const isNullOrWhitespace = (value: any): boolean => isNull(value) || value.trim().length == 0;

@Component({
    selector: 'app-login-component',
    templateUrl: './login-component.component.html',
    styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

    private _username!: string;
    get username() { return this._username }
    @Input() set username(username: string) { this._username = username }
    @Output() usernameChange = new EventEmitter<string>();

    private _password!: string;
    get password() { return this._password }
    @Input() set password(password: string) { this._password = password }
    @Output() passwordChange = new EventEmitter<string>();

    @Output() event: EventEmitter<LoginEvent> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    get credentialsValidation() {
        return (
            isNullOrWhitespace(this.username)
            && isNullOrWhitespace(this.password)
            || this.username === undefined
            || this.password === undefined
        )
    }

    onSubmitClicked() {
        let event: LoginEvent = {
            username: this.username!,
            password: this.password!
        };

        this.event.emit(event);

        console.log("event:", event);
    }
}
