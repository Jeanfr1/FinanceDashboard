import { NextResponse } from 'next/server';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export async function GET() {
  try {
    const response = await axios.get(`${API_BASE_URL}/expenses`);
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    const err = error as { response?: { data?: { message?: string }; status?: number } };
    return NextResponse.json(
      { error: err.response?.data?.message || 'An error occurred' },
      { status: err.response?.status || 500 }
    );
  }
}

export async function POST(request: Request) {
  const expense = await request.json();
  
  try {
    const response = await axios.post(`${API_BASE_URL}/expenses`, expense);
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    const err = error as { response?: { data?: { message?: string }; status?: number } };
    return NextResponse.json(
      { error: err.response?.data?.message || 'An error occurred' },
      { status: err.response?.status || 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  
  try {
    const response = await axios.delete(`${API_BASE_URL}/expenses/${id}`);
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    const err = error as { response?: { data?: { message?: string }; status?: number } };
    return NextResponse.json(
      { error: err.response?.data?.message || 'An error occurred' },
      { status: err.response?.status || 500 }
    );
  }
}
