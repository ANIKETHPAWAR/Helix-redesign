import './ProofStatements.css'

function ProofStatements() {
  const metrics = [
    { value: "5,00,000+", label: "sq ft of mixed-use development" },
    { value: "600+", label: "villas & apartments delivered" },
    { value: "10,000+", label: "homes sold" },
    { value: "4 million+", label: "sq ft painting executed" },
    { value: "1 million+", label: "sq ft flooring laid" },
    { value: "2,000+", label: "bathrooms fitted" },
    { value: "5,000+", label: "units electrically wired" }
  ]

  return (
    <section className="proof-statements">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Executed at Scale. Delivered on Ground.</h2>
        </header>
        <div className="proof-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="proof-card">
              <p className="proof-value">{metric.value}</p>
              <p className="proof-label">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProofStatements
