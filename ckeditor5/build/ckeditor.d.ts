/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { GeneralHtmlSupport, HtmlComment } from '@ckeditor/ckeditor5-html-support';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { Style } from '@ckeditor/ckeditor5-style';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Alignment | typeof AutoLink | typeof Autoformat | typeof Autosave | typeof BlockQuote | typeof Bold | typeof CloudServices | typeof CodeBlock | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof GeneralHtmlSupport | typeof Heading | typeof HtmlComment | typeof HtmlEmbed | typeof Image | typeof ImageCaption | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Indent | typeof Italic | typeof Link | typeof List | typeof MediaEmbed | typeof Paragraph | typeof PasteFromOffice | typeof SourceEditing | typeof Style | typeof Table | typeof TableToolbar | typeof TextTransformation)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
            shouldNotGroupWhenFull: boolean;
        };
        language: string;
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        placeholder: string;
    };
}
export default Editor;
