import { Injectable } from '@angular/core';

@Injectable()

export class PasswordValidatorService {
    score = 0;
    strength = '';
    isPass = false;

    // Regular Expressions.
    regex: Array<any> = new Array();

    constructor() {
        this.regex.push('[A-Z]'); // Uppercase Alphabet.
        this.regex.push('[a-z]'); // Lowercase Alphabet.
        this.regex.push('[0-9]'); // Digit.
        this.regex.push(/[^A-z\s\d][\\\^]?/); // Special Character.
    }

    getPasswordStrength(string) {
        this.calculateScore(string);

        return {
            score: this.score,
            strength: this.strength,
            percentage: (this.score / (this.regex.length + 1)) * 100
        };
    }

    isPasswordPass() {
        return this.isPass;
    }

    private calculateScore(string: string) {
        this.score = 0;
        for (let i = 0; i < this.regex.length; i++) {
            if (new RegExp(this.regex[i]).test(string)) {
                this.score++;
            }
        }

        if (string.trim().length >= 8) {
            this.score++;
        }

        switch (this.score) {
            case 1: this.strength = 'Weak';
                this.isPass = false;
                break;
            case 2: this.strength = 'Average';
                this.isPass = false;
                break;
            case 3: this.strength = 'Good';
                this.isPass = true;
                break;
            case 4: this.strength = 'Strong';
                this.isPass = true;
                break;
            case 5: this.strength = 'Very Strong';
                this.isPass = true;
                break;
        }
    }

}
