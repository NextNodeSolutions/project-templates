import { ExampleFeature } from './components/features/ExampleFeature'
import { appLogger } from './lib/logger'

export const App = () => {
	appLogger.info('App initialized', { environment: import.meta.env.MODE })

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<header className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl font-bold text-gray-900">{{project_name}}</h1>
							<p className="text-sm text-gray-600 mt-1">{{project_description}}</p>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-sm text-gray-500">POC Template v{{project_version}}</span>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<div className="space-y-8">
					<div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
						<h2 className="text-lg font-semibold text-blue-900 mb-2">
							Welcome to NextNode POC Template
						</h2>
						<p className="text-blue-800 mb-4">
							This template includes everything you need for rapid POC development:
						</p>
						<ul className="space-y-2 text-blue-800">
							<li className="flex items-start">
								<span className="mr-2">✅</span>
								<span>Type-safe localStorage with useLocalStorage hook</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">✅</span>
								<span>Reusable components (Button, Card, Modal)</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">✅</span>
								<span>Structured logging with @nextnode/logger</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">✅</span>
								<span>Tailwind CSS v4 for styling</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">✅</span>
								<span>Testing setup with Vitest</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2">✅</span>
								<span>Pre-commit hooks and code quality tools</span>
							</li>
						</ul>
					</div>

					<ExampleFeature />
				</div>
			</main>

			<footer className="bg-white border-t mt-12">
				<div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
					<p className="text-center text-gray-500 text-sm">
						Built with NextNode POC Template • Powered by Preact + Vite
					</p>
				</div>
			</footer>
		</div>
	)
}
