import React, { useState } from "react";
import ButtonManual from "./ButtonManual";

/**
 * ButtonManualDemo - Demo component to showcase ButtonManual variants
 * Similar to Angular demo but with React patterns
 */
const ButtonManualDemo: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const toggleLoading = (key: string) => {
    setLoadingStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleButtonClick = (variant: string) => {
    console.log(`${variant} button clicked!`);
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          React Manual Button Component
        </h1>

        <div className="demo-section">
          <h3 className="text-lg font-semibold mb-4">
            Manual Button Variants Demo
          </h3>

          <div className="space-y-4">
            {/* Size variants */}
            <div className="demo-grid">
              <span className="demo-label">Sizes:</span>
              <ButtonManual
                text="Small"
                size="small"
                variant="primary"
                onClick={() => handleButtonClick("small")}
              />
              <ButtonManual
                text="Medium"
                size="medium"
                variant="primary"
                onClick={() => handleButtonClick("medium")}
              />
              <ButtonManual
                text="Large"
                size="large"
                variant="primary"
                onClick={() => handleButtonClick("large")}
              />
            </div>

            {/* Color variants */}
            <div className="demo-grid">
              <span className="demo-label">Colors:</span>
              <ButtonManual
                text="Primary"
                variant="primary"
                onClick={() => handleButtonClick("primary")}
              />
              <ButtonManual
                text="Secondary"
                variant="secondary"
                onClick={() => handleButtonClick("secondary")}
              />
              <ButtonManual
                text="Danger"
                variant="danger"
                onClick={() => handleButtonClick("danger")}
              />
              <ButtonManual
                text="Success"
                variant="success"
                onClick={() => handleButtonClick("success")}
              />
            </div>

            {/* States */}
            <div className="demo-grid">
              <span className="demo-label">States:</span>
              <ButtonManual
                text="Normal"
                variant="primary"
                onClick={() => handleButtonClick("normal")}
              />
              <ButtonManual text="Disabled" variant="primary" disabled={true} />
              <ButtonManual text="Loading" variant="primary" loading={true} />
            </div>

            {/* Interactive Loading */}
            <div className="demo-grid">
              <span className="demo-label">Interactive:</span>
              <ButtonManual
                text={
                  loadingStates.interactive ? "Loading..." : "Click to Load"
                }
                variant="success"
                loading={loadingStates.interactive}
                onClick={() => toggleLoading("interactive")}
              />
              <ButtonManual
                text="Reset"
                variant="secondary"
                onClick={() => setLoadingStates({})}
              />
            </div>

            {/* Custom Children */}
            <div className="demo-grid">
              <span className="demo-label">Custom:</span>
              <ButtonManual variant="primary">
                <span>🚀 Rocket Button</span>
              </ButtonManual>
              <ButtonManual variant="danger">
                <span>❌ Delete Action</span>
              </ButtonManual>
            </div>
          </div>
        </div>

        {/* Technical Info */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="text-lg font-semibold text-blue-900 mb-3">
            Technical Features Implemented
          </h4>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>✅ useRef integration for direct DOM access</li>
            <li>✅ useState for interactive state management</li>
            <li>✅ useCallback for optimized event handlers</li>
            <li>✅ useEffect for DOM manipulation</li>
            <li>✅ forwardRef for ref forwarding</li>
            <li>✅ TypeScript interface for props</li>
            <li>✅ Multiple variants and sizes</li>
            <li>✅ Loading and disabled states</li>
            <li>✅ Accessibility features (ARIA, keyboard navigation)</li>
            <li>✅ CSS animations and hover effects</li>
            <li>✅ Responsive design and dark mode support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ButtonManualDemo;
