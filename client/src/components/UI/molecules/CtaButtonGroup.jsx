import React from "react";
import Button from "../atoms/Button";

function CtaButtonGroup() {
  return (
    <div class="flex justify-center flex-wrap gap-6">
      <Button type="primary">
        <a href="#demo">Check AI functionality</a>
      </Button>
      <Button type="secondary">
        <a href="#features">Learn More</a>
      </Button>
    </div>
  );
}

export default CtaButtonGroup;
