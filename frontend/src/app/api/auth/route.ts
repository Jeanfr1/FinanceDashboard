import { NextResponse } from 'next/server';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export async function POST(request: Request) {
  const { path, ...body } = await request.json();
  
  try {
    const response = await axios.post(`${API_BASE_URL}/${path}`, body);
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    const err = error as { response?: { data?: { message?: string }; status?: number } };
    return NextResponse.json(
      { error: err.response?.data?.message || 'An error occurred' },
      { status: err.response?.status || 500 }
    );
  }
}
