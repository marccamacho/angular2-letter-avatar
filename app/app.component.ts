/* 
 * @author RAJAN G
 */

import {Component} from 'angular2/core';
import {LetterAvatarDirective} from '../directives/letter-avatar.directive';

@Component({
    selector : 'my-app',
    directives: [LetterAvatarDirective],
    template:  `
        <avatar  [avatardata]="avatarDataSquare"></avatar>
        <avatar  [avatardata]="avatarDataCircle1"></avatar>
        <avatar  [avatardata]="avatarDataCircle2"></avatar>`    
})
export class AppComponent {
    public avatarDataSquare: any = {
        size: 100,
//        background: '#F39C12', // by default it will produce dynamic colors
        fontColor: '#FFFFFF',
        border: "2px solid #d3d3d3",
        isSquare: true,
        text: "Rajan Gunasekaran"
    };
    public avatarDataCircle1: any = {
        size: 100,
//        background: '#F39C12', // by default it will produce dynamic colors
        fontColor: '#FFFFFF',
        border: "2px solid #d3d3d3",
        isSquare: false,
        text: "Rajan Gunasekaran"
    };
    public avatarDataCircle2: any = {
        size: 100,
//        background: '#F39C12', // by default it will produce dynamic colors
        fontColor: '#FFFFFF',
        border: "2px solid #d3d3d3",
        isSquare: false,
        text: "Siva "
    };
}
