// /pages/api/generate-pdf.js
import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: { flexDirection: 'row', backgroundColor: '#E4E4E4' },
    section: { margin: 10, padding: 10, flexGrow: 1 },
});

const SoftwareResume = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Software Resume</Text>
                <Text>Projects and Expertise in Programming</Text>
            </View>
        </Page>
    </Document>
);

export default async function handler(req, res) {
    const filePath = `${process.cwd()}/public/SoftwareResume.pdf`;

    try {
        await ReactPDF.render(<SoftwareResume />, filePath);
        res.status(200).json({ url: '/SoftwareResume.pdf' });
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
}
