import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AlertCircle, Upload } from 'lucide-react';

export function ImageUpload({ onImageUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onImageUpload(file);
  };

  return (
    <div className="space-y-4">
      <Label htmlFor="image-upload" className="block">Upload Image</Label>
      <div className="flex items-center space-x-2">
        <Input
          id="image-upload"
          type="file"
          onChange={handleFileSelect}
          accept="image/*"
          className="flex-grow"
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => document.getElementById('image-upload').click()}
        >
          <Upload className="h-4 w-4" />
        </Button>
      </div>
      {selectedFile && (
        <p className="text-sm text-muted-foreground flex items-center">
          <AlertCircle className="mr-2 h-4 w-4" />
          {selectedFile.name} selected
        </p>
      )}
    </div>
  );
}