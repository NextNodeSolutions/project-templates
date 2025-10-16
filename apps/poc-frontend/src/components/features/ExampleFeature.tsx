import { useState } from 'preact/hooks'
import { Button } from '../common/Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../common/Card'
import { Modal } from '../common/Modal'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useModal } from '@/hooks/useModal'
import { componentLogger } from '@/lib/logger'
import type { BaseResource } from '@/types'

interface Item extends BaseResource {
	name: string
	description?: string
}

/**
 * Example feature component demonstrating:
 * - localStorage persistence with useLocalStorage hook
 * - Modal management with useModal hook
 * - Common component usage (Button, Card, Modal)
 * - Logging with @nextnode/logger
 */
export const ExampleFeature = () => {
	const [items, setItems, clearItems] = useLocalStorage<Item[]>('example-items', [])
	const [newItemName, setNewItemName] = useState('')
	const { isOpen, open, close } = useModal(false, {
		closeOnEscape: true,
		onOpen: () => componentLogger.info('Modal opened'),
		onClose: () => componentLogger.info('Modal closed'),
	})

	const handleAddItem = () => {
		if (!newItemName.trim()) return

		const newItem: Item = {
			id: `${Date.now()}`,
			name: newItemName.trim(),
			createdAt: new Date().toISOString(),
		}

		setItems((prev) => [...prev, newItem])
		setNewItemName('')
		close()

		componentLogger.info('Item added', { itemId: newItem.id, itemName: newItem.name })
	}

	const handleDeleteItem = (id: string) => {
		setItems((prev) => prev.filter((item) => item.id !== id))
		componentLogger.info('Item deleted', { itemId: id })
	}

	const handleClearAll = () => {
		clearItems()
		componentLogger.info('All items cleared')
	}

	return (
		<div className="space-y-4">
			<Card>
				<CardHeader>
					<CardTitle>Example Feature</CardTitle>
					<CardDescription>
						Demonstrating localStorage, modals, and common components
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{items.length === 0 ? (
							<div className="text-center py-8 text-gray-500">
								<p>No items yet. Add your first item to get started!</p>
							</div>
						) : (
							<ul className="space-y-2">
								{items.map((item) => (
									<li
										key={item.id}
										className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
									>
										<div>
											<p className="font-medium">{item.name}</p>
											{item.createdAt && (
												<p className="text-sm text-gray-500">
													{new Date(item.createdAt).toLocaleDateString()}
												</p>
											)}
										</div>
										<Button
											variant="destructive"
											size="sm"
											onClick={() => handleDeleteItem(item.id)}
										>
											Delete
										</Button>
									</li>
								))}
							</ul>
						)}
					</div>
				</CardContent>
				<CardFooter className="gap-2">
					<Button onClick={open}>Add Item</Button>
					{items.length > 0 && (
						<Button variant="outline" onClick={handleClearAll}>
							Clear All
						</Button>
					)}
				</CardFooter>
			</Card>

			<Modal isOpen={isOpen} onClose={close} title="Add New Item">
				<div className="space-y-4">
					<div>
						<label htmlFor="item-name" className="block text-sm font-medium mb-2">
							Item Name
						</label>
						<input
							id="item-name"
							type="text"
							value={newItemName}
							onInput={(e) => setNewItemName(e.currentTarget.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter item name"
							autoFocus
						/>
					</div>
					<div className="flex gap-2 justify-end">
						<Button variant="outline" onClick={close}>
							Cancel
						</Button>
						<Button onClick={handleAddItem} disabled={!newItemName.trim()}>
							Add Item
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	)
}
