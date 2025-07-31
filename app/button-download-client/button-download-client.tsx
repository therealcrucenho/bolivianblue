'use client';

import { Button } from '@tremor/react';
import { saveAs } from 'file-saver';

export default function ButtonDownloadClient() {
  const handleClick = async () => {
    const response = await fetch('/api/downloadHistoricalData');
    if (response.ok) {
      const csv = await response.text();
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'historicalData.csv');
    } else {
      console.error('Failed to download data');
    }
  };

  return (
    <div className="mt-8 flex items-center">
      <Button size="xs" onClick={handleClick} className="btn-download">
        Descargar CSV
      </Button>
    </div>
  );
}
