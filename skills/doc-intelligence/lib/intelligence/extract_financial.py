import pandas as pd
from markitdown import MarkItDown
import os

def extract_financial_data(file_path):
    """
    Extracts financial data from a file (Excel, CSV, PDF, etc.)
    Returns a dictionary with 'success' and 'records'.
    """
    ext = os.path.splitext(file_path)[1].lower()
    records = []
    
    try:
        if ext in ['.xlsx', '.xls', '.csv', '.ods']:
            if ext == '.csv':
                df = pd.read_csv(file_path)
            else:
                df = pd.read_excel(file_path)
            
            # Fill NaN with None for JSON compatibility
            df = df.where(pd.notnull(df), None)
            records = df.to_dict('records')
        else:
            # Use MarkItDown for PDF, Word, etc.
            md = MarkItDown()
            result = md.convert(file_path)
            records = [{"content": result.text_content}]
            
        return {"success": True, "records": records}
    except Exception as e:
        return {"success": False, "error": str(e)}
