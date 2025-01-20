import React from 'react';

interface VideoFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;
  submitLabel?: string;
}

export default function VideoForm({ onSubmit, initialData, submitLabel = "Save" }: VideoFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-white">
          Titulo
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={initialData?.title}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-white">
          Categoria
        </label>
        <select
          id="category"
          name="category"
          defaultValue={initialData?.category}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="innovation">Innovation & Management</option>
        </select>
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-white">
          URL de la imagen
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          defaultValue={initialData?.imageUrl}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="videoUrl" className="block text-sm font-medium text-white">
          URL del video
        </label>
        <input
          type="url"
          id="videoUrl"
          name="videoUrl"
          defaultValue={initialData?.videoUrl}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-white">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={initialData?.description}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="reset"
          className="px-4 py-2 border border-gray-300 rounded-md text-white hover:bg-gray-50"
        >
          Clear
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}