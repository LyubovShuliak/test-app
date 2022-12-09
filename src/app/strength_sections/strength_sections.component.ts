import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PASSWORD_STRENGTH } from 'src/constants';
import { SectionsColors } from 'src/types';

@Component({
  selector: 'app-section',
  templateUrl: './strength_sections.component.html',
  styleUrls: ['./strength_sections.component.css'],
})
export class SectionComponent implements OnChanges {
  @Input() password: string = '';

  colors: SectionsColors = { first: '', second: '', third: '' };
  strength = 'empty';

  ngOnChanges(changes: SimpleChanges) {
    const password = changes['password'].currentValue;
    this.getStrength(password);
  }

  handlePasswordChange(strength: SectionsColors) {
    for (const key in this.colors) {
      this.colors[key as keyof SectionsColors] =
        strength[key as keyof SectionsColors];
    }
  }

  getStrength(password: string) {
    if (!password) {
      this.handlePasswordChange(PASSWORD_STRENGTH.EMPTY.classes);
      return;
    }
    if (password && password?.length < 8) {
      this.handlePasswordChange(PASSWORD_STRENGTH.SHORT.classes);
      this.strength = PASSWORD_STRENGTH.SHORT.strength;
      return;
    }
    const letters = password.match(/[a-zA-Z]/gm);
    const digits = password.match(/\d/gm);
    const symbols = password.match(/[\W_]/gm);
    if (
      letters?.length === password.length ||
      digits?.length === password.length ||
      symbols?.length === password.length
    ) {
      this.handlePasswordChange(PASSWORD_STRENGTH.EASY.classes);
      this.strength = PASSWORD_STRENGTH.EASY.strength;
      return;
    }
    if (letters && digits && symbols) {
      this.handlePasswordChange(PASSWORD_STRENGTH.STRONG.classes);
      this.strength = PASSWORD_STRENGTH.STRONG.strength;
      return;
    }
    if ((letters && digits) || (digits && symbols) || (letters && symbols)) {
      this.handlePasswordChange(PASSWORD_STRENGTH.MEDIUM.classes);
      this.strength = PASSWORD_STRENGTH.MEDIUM.strength;
      return;
    }
  }

  getFirstSectionColor() {
    return this.colors.first;
  }

  getSecondSectionColor() {
    return this.colors.second;
  }

  getThirdSectionColor() {
    return this.colors.third;
  }
}
