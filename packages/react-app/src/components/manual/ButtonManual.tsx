import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./ButtonManual.css";

/**
 * Button Manual Component - React Version
 * Created manually to replicate CompGen button functionality
 * @author Manual Development
 *
 * 🔧 useRef Integration:
 * - Direct DOM access for dynamic class manipulation
 * - Perfect for CSS utility classes
 * - Provides native React DOM interaction patterns
 */

export interface ButtonManualProps {
  text?: string;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: React.ReactNode;
}

const ButtonManual = forwardRef<HTMLButtonElement, ButtonManualProps>(
  (
    {
      text = "Manual Button",
      variant = "primary",
      size = "medium",
      disabled = false,
      loading = false,
      type = "button",
      onClick,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    // 🎯 useRef for direct DOM access
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // 🎨 Custom styling from manual implementation
    const customBackgroundColor = "#007bff";
    const customTextColor = "#343a40";
    const customFocusColor = "#0056b3";

    // 📱 Handle click with loading and disabled state
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled && !loading && onClick) {
          onClick(event);
        }
      },
      [disabled, loading, onClick]
    );

    // 🚀 Get dynamic button classes
    const getButtonClasses = useCallback(() => {
      const baseClasses =
        "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed manual-button";

      const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
        secondary:
          "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
        danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
        success:
          "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
      };

      const sizeClasses = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
      };

      return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    }, [variant, size, className]);

    // 🎨 Get custom styles
    const getCustomStyles = useCallback(() => {
      return {
        backgroundColor:
          variant === "primary" ? customBackgroundColor : undefined,
        color: customTextColor,
        borderColor: customFocusColor,
        transform: isHovered && !disabled ? "scale(1.02)" : "scale(1)",
        boxShadow: isFocused ? `0 0 0 3px ${customFocusColor}33` : undefined,
      };
    }, [
      variant,
      customBackgroundColor,
      customTextColor,
      customFocusColor,
      isHovered,
      disabled,
      isFocused,
    ]);

    // 🔧 useEffect for direct DOM manipulation
    useEffect(() => {
      const buttonEl = buttonRef.current;
      if (buttonEl) {
        // Add custom class via DOM
        buttonEl.classList.add("manual-button-react");

        // Custom focus handlers
        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);

        buttonEl.addEventListener("focus", handleFocus);
        buttonEl.addEventListener("blur", handleBlur);

        return () => {
          buttonEl.removeEventListener("focus", handleFocus);
          buttonEl.removeEventListener("blur", handleBlur);
        };
      }
    }, []);

    // 🎮 Keyboard accessibility
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleClick(event as any);
        }
      },
      [handleClick]
    );

    // 📱 Mouse event handlers
    const handleMouseEnter = useCallback(() => {
      if (!disabled) {
        setIsHovered(true);
      }
    }, [disabled]);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    return (
      <button
        ref={ref || buttonRef}
        type={type}
        disabled={disabled || loading}
        className={getButtonClasses()}
        style={getCustomStyles()}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        aria-label={text}
        aria-disabled={disabled || loading}
        role="button"
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <span
            className="inline-block w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"
            aria-hidden="true"
          />
        )}

        {/* Button Text */}
        <span className={loading ? "opacity-0" : ""}>{children || text}</span>
      </button>
    );
  }
);

ButtonManual.displayName = "ButtonManual";

export default ButtonManual;
