import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";

/**
 * Button Manual Component
 * Created manually to replicate CompGen button functionality
 * @author Manual Development
 *
 * 🔧 ElementRef Integration:
 * - Direct DOM access for dynamic class manipulation
 * - Perfect for Tailwind CSS utility classes
 * - Provides native Angular DOM interaction patterns
 */
@Component({
  selector: "app-button-manual",
  templateUrl: "./button-manual.component.html",
  styleUrls: ["./button-manual.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class ButtonManualComponent implements AfterViewInit {
  @Input() text: string = "Manual Button";
  @Input() variant: "primary" | "secondary" | "danger" | "success" = "primary";
  @Input() size: "small" | "medium" | "large" = "medium";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: "button" | "submit" | "reset" = "button";

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  // 🎯 ElementRef for direct DOM access
  @ViewChild("buttonElement", { static: true })
  buttonElementRef!: ElementRef<HTMLButtonElement>;

  // 🎨 Custom styling from manual implementation
  customBackgroundColor = "#007bff";
  customTextColor = "#343a40";
  customFocusColor = "#0056b3";

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  onClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }

  get buttonClasses(): string {
    const baseClasses =
      "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
      secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
      danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
      success:
        "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
    };

    const sizeClasses = {
      small: "px-3 py-1.5 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    };

    return `${baseClasses} ${variantClasses[this.variant]} ${
      sizeClasses[this.size]
    }`;
  }

  get customStyles(): { [key: string]: string } {
    return {
      backgroundColor:
        this.variant === "primary" ? this.customBackgroundColor : "",
      color: this.customTextColor,
      borderColor: this.customFocusColor,
    };
  }

  ngAfterViewInit(): void {
    // 🚀 Direct DOM manipulation using ElementRef
    if (this.buttonElementRef?.nativeElement) {
      const buttonEl = this.buttonElementRef.nativeElement;

      // Add custom class via DOM
      buttonEl.classList.add("manual-button");

      // Custom focus handler
      buttonEl.addEventListener("focus", () => {
        buttonEl.style.boxShadow = `0 0 0 3px ${this.customFocusColor}33`;
      });

      buttonEl.addEventListener("blur", () => {
        buttonEl.style.boxShadow = "";
      });
    }
  }

  // 📱 Responsive behavior
  onHover(): void {
    if (this.buttonElementRef?.nativeElement && !this.disabled) {
      this.buttonElementRef.nativeElement.style.transform = "scale(1.02)";
    }
  }

  onLeave(): void {
    if (this.buttonElementRef?.nativeElement) {
      this.buttonElementRef.nativeElement.style.transform = "scale(1)";
    }
  }

  // 🎮 Keyboard accessibility
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.onClick(event as any);
    }
  }
}
