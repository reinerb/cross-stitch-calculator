type MetricToggleProps = {
  metric: boolean;
  toggle: () => void;
  className?: string;
};

function MetricToggle({ metric, toggle, className }: MetricToggleProps) {
  return (
    <button onClick={toggle} className={className}>
      {metric ? "in" : "cm"}
    </button>
  );
}

export default MetricToggle;
