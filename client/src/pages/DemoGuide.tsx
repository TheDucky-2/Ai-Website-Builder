const DemoGuide = () => {
  return (

<div className="flex flex-col items-center space-y-10 px-6 md:px-20 py-10 bg-black text-white">

  {/* Header */}
  <div className="text-center max-w-3xl space-y-3">
    <h1 className="text-4xl font-bold tracking-tight text-white">
      Demo Guide
    </h1>
    <p className="text-gray-300 leading-relaxed">
      This project is fully usable in production environment mode. Follow the steps below to explore all features.
    </p>
  </div>

  <div className="w-full max-w-3xl space-y-10">

    {/* Section */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold text-white">Demo Login</h3>

      <p className="text-gray-300">
        You can either sign up normally or use the following demo account:
      </p>

      <ul className="list-disc pl-6 space-y-1 text-gray-300">
        <li>Email: test@test.com</li>
        <li>Password: Test@1234</li>
      </ul>
    </section>

    {/* Section */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold text-white">
        Create Your First Project
      </h3>

      <p className="text-gray-300">After logging in:</p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-300">
        <li>
          Enter a prompt like:
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
            <li>“Create a modern portfolio website for a web designer”</li>
            <li>“Build a landing page for a SaaS product”</li>
          </ul>
        </li>

        <li>
          Click <span className="font-semibold text-white">Create with AI</span>
        </li>

        <li>Wait for AI generation to complete.</li>
      </ol>

      <p className="text-sm text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-md">
        ⚠️ AI generation may take a few moments depending on load, as we use free-tier OpenRouter models.
      </p>
    </section>

    {/* AI Generation */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold text-white">
        AI Website Generation
      </h3>

      <ul className="list-disc pl-6 space-y-1 text-gray-300">
        <li>Uses OpenRouter LLM APIs</li>
        <li>Websites are generated as structured outputs</li>
        <li>Supports iterative refinement</li>
      </ul>
    </section>

    {/* Versioning */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold text-white">
        Version History
      </h3>

      <ul className="list-disc pl-6 space-y-1 text-gray-300">
        <li>Multiple generated versions</li>
        <li>Conversation history with AI</li>
        <li>Rollback to previous versions</li>
      </ul>
    </section>

    {/* Payments */}
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold text-white">
        Stripe Payments (Testing)
      </h3>

      <p className="text-gray-300">
        Uses <span className="font-medium text-white">Stripe Checkout in test mode</span>.
      </p>

      <h4 className="font-medium text-white">Test Card Details:</h4>

      <ul className="list-disc pl-6 space-y-1 text-gray-300">
        <li>Card Number: 4242 4242 4242 4242</li>
        <li>Expiry: Any future date</li>
        <li>CVC: Any 3 digits</li>
        <li>ZIP: Any</li>
      </ul>

      <p className="text-sm text-red-400">
        ⚠️ No real payments are processed.
      </p>
    </section>

  </div>
</div>

  )
}

export default DemoGuide