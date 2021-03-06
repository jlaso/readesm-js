// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class


import * as padStart from 'lodash/padStart';
import Block from 'DataTypes/Block';
import Subblocks from 'DataTypes/Subblocks';
import RawData from 'DataTypes/RawData';
import DataType from 'DataTypes/DataType';
import DataReader from 'utils/DataReader';
import Converter from 'utils/Converter';
import QString from 'utils/QString';
import FormatStrings from 'utils/FormatStrings';
import CardBlock from 'CardBlocks/CardBlock';
import VuBlock from 'VuBlocks/VuBlock';
import Reporter from 'Reporter/Reporter';

import {tr} from 'utils/Translation';

import Block11Record from 'DataTypes/Block11Record';


export default class Block13 extends VuBlock {

    static BLOCK_TYPE = 0x13;
    

    header: RawData;
    block11Record: Subblocks<Block11Record>;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.header = DataReader.readRawData(data, 0, 30);
        this.block11Record = DataReader.readSubblocksByCount<Block11Record>(Block11Record, data.slice(30 + 2), 0, (DataReader.readUint16(data, 30)));
        this.hasSignature = false;    
    }

    className() {
        return "Block13";
    }

    title() {
        return "Unknown Block with TREP 0x13";
    }

    size() {
        return 32;
    }

    toString() {
		let qs = new QString('Block13');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("header"), this.header.toString());
        report.writeArray(this.block11Record, tr("block11Record"));
    }
}

