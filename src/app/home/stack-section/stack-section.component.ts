import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../section-header/section-header.component";

export enum StackCategory {
  BACKEND, FRONTEND, GAME
}

export class Stack {
  name: string;
  icon: string;
  categories: StackCategory[];
  isHighlight: boolean;

  public constructor(name: string, icon: string, categories: StackCategory[]) {
    this.name = name;

    if (this.isValidUrl(icon)) {
      this.icon = icon;
    }
    else {
      this.icon = "/stackIcon/" + icon;
    }

    this.categories = categories;
    this.isHighlight = true;
  }

  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  getNgClass(): string {
    var ngClass = "";
    if (this.categories != null && this.categories.length > 0) {
      switch (this.categories[0]) {
        case StackCategory.BACKEND:
          ngClass = "backend";
          break;
        case StackCategory.FRONTEND:
          ngClass = "frontend";
          break;
        case StackCategory.GAME:
          ngClass = "game";
          break;
      }
    }

    if (this.isHighlight) {
      ngClass += " highlight";
    }

    return ngClass;
  }
}

@Component({
  selector: 'app-stack-section',
  imports: [NgClass, NgFor, SectionHeaderComponent],
  templateUrl: './stack-section.component.html',
  styleUrl: './stack-section.component.scss'
})
export class StackComponent {
  stacks: Stack[] = [
    new Stack('Java', 'java-svgrepo-com.svg', [StackCategory.BACKEND]),
    new Stack('Spring Boot', 'https://spring.io/img/spring.svg', [StackCategory.BACKEND]),
    new Stack('Angular', 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg', [StackCategory.FRONTEND]),
    new Stack('Hibernate', 'hibernate-svgrepo-com.svg', [StackCategory.BACKEND]),
    new Stack('HTML', 'html-5-svgrepo-com.svg', [StackCategory.FRONTEND]),
    new Stack('SCSS', 'scss2-svgrepo-com.svg', [StackCategory.FRONTEND]),
    new Stack('TypeScript', 'typescript-official-svgrepo-com.svg', [StackCategory.FRONTEND]),
    new Stack('PostgreSQL', 'postgresql-svgrepo-com.svg', [StackCategory.BACKEND]),
    new Stack('JavaScript', 'javascript-svgrepo-com.svg', [StackCategory.FRONTEND]),
    new Stack('jUnit', 'JUnit.svg', [StackCategory.BACKEND]),
    new Stack('RxJS', 'rxjs-seeklogo.svg', [StackCategory.FRONTEND]),
    new Stack('C#', 'csharp-svgrepo-com.svg', [StackCategory.GAME])
  ];
  tools: Stack[] = [
    new Stack('IntelliJ', 'https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg', []),
    new Stack('Visual Studio Code', 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', []),
    new Stack('Git', 'git-icon-logo-svgrepo-com.svg', []),
    new Stack('Postman', 'postman-icon-svgrepo-com.svg', []),
    new Stack('Visual Studio', 'https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg', []),
    new Stack('Unity3D', 'unity-svgrepo-com.svg', []),
    new Stack('Jenkins', 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg', []),
    new Stack('Android Studio', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg', []),
    new Stack('Figma', 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', [StackCategory.FRONTEND])
  ]

  selectedCategory: StackCategory[] = [];
  StackCategory = StackCategory;

  showStacksByCategory(category: StackCategory): void {
    this.stacks.forEach(stack => {
      const index = stack.categories.findIndex(stackCategory => category == stackCategory);
      if (index == -1) {
        stack.isHighlight = false;
      }
      else {
        stack.isHighlight = true;
      }
    });
  }

  showAllStacks(): void {
    this.stacks.forEach(stack => {
      stack.isHighlight = true;
    });
  }
}
