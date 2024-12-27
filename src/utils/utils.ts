export function formatPrice(value: string | number | null | undefined): string {
    if (!value) return '';
    const cleanValue = value.toString().replace(/\D/g, '');
    return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
